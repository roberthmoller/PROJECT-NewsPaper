import type { Metadata } from "./open-graph";

/*
 *   id	            The item's unique id.
 *   deleted	    true if the item is deleted.
 *   type	        The type of item. One of "job", "story", "comment", "poll", or "pollopt".
 *   by	            The username of the item's author.
 *   time	        Creation date of the item, in Unix Time.
 *   text	        The comment, story or poll text. HTML.
 *   dead	        true if the item is dead.
 *   parent	        The comment's parent: either another comment or the relevant story.
 *   poll	        The pollopt's associated poll.
 *   kids	        The ids of the item's comments, in ranked display order.
 *   url	        The URL of the story.
 *   score	        The story's score, or the votes for a pollopt.
 *   title	        The title of the story, poll or job. HTML.
 *   parts	        A list of related pollopts, in display order.
 *   descendants	In the case of stories or polls, the total comment count.
 */
export type ItemType = 'job' | 'story' | 'comment' | 'poll' | 'pollopt';

export type Item = {
    id?: number | string;
    deleted?: boolean;
    type?: ItemType;
    by?: string;
    time?: number;
    text?: string;
    dead?: boolean;
    parent?: number;
    poll?: number;
    kids?: number[];
    url?: string;
    score?: number;
    title?: string;
    parts?: number[];
    descendants?: number;
}

export interface User {
    about: string;
    created: number;
    id: string;
    karma: number;
    submitted: number[];
}

export type Comment =  {
    id: number;
    by: string;
    text: string;
    time: number;
    kids: number[];
    parent: number;
    deleted?: boolean;
};

export type CommentTree = {
    comment: Comment;
    kids: CommentTree[];
}