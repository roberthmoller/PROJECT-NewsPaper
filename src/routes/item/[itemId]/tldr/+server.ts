import { HackerNewsApi } from '$lib';
import { json } from '@sveltejs/kit';
import { ChatGroq } from '@langchain/groq';
import { SystemMessage, HumanMessage } from '@langchain/core/messages';
import { CheerioWebBaseLoader } from "@langchain/community/document_loaders/web/cheerio";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { HtmlToTextTransformer } from "@langchain/community/document_transformers/html_to_text";
import { GROQ_API_KEY } from '$env/static/private';

export async function GET({ params, fetch }) {
    const { itemId } = params;
    const news = new HackerNewsApi(fetch);
    const tldr = new TldrService();

    try {
        const story = await news.item(parseInt(itemId));
        if (!story.url) {
            return json({ error: 'No URL found for this item' }, { status: 400 });
        }
        const summary = await tldr.summarise(story.url);
        return json(summary);
    } catch (error) {
        return json({ error: String(error) }, { status: 500 });
    }
}

class TldrService {
    async summarise(url: string) {
         const loader = new CheerioWebBaseLoader(url);
         const docs = await loader.load();
         if (!docs.length) throw new Error("No content found at the provided URL");

         const splitter = RecursiveCharacterTextSplitter.fromLanguage("html");
         const transformer = new HtmlToTextTransformer();
         const sequence = splitter.pipe(transformer);
         const processedDocs = await sequence.invoke(docs);
         if (!processedDocs.length) throw new Error("Failed to process the documents");

         const content = processedDocs.map(doc => doc.pageContent).join("\n");
         if (!content) throw new Error("No content to summarize");

         const chat = new ChatGroq({
             apiKey: GROQ_API_KEY,
             model: 'llama-3.1-70b-versatile',
         });

         const messages = [
             new SystemMessage("You are a helpful assistant that summarizes web content. You can write in markdown but make it short and concise."),
             new HumanMessage(`Please summarize the following content: ${content}`)
         ];

         const response = await chat.invoke(messages);
         if (!response || !response.content) throw new Error("Failed to get a response from the chat model");

         return {
             summary: response.content.toString().trim()
         };
    }
}