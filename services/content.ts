import { Document } from "@contentful/rich-text-types";
import Contentful, { createClient, Entry } from "contentful";

export type Post = Entry<{
    title: Contentful.EntryFields.Text;
    description: Contentful.EntryFields.Text;
    thumbnail: Contentful.Asset;
    content: Document;
}>;

const client = createClient({
    space: 'c0s7ike8o8e0',
    accessToken: 'mmHXS9ZqjPEbquZhpXPUTqaA4FRKllg1pQ-gmmtxPX4',
});

export const getPosts = async (): Promise<Contentful.Entry<Post>[]> => {
    const { items } = await client.getEntries<Post>({
        content_type: 'post',
    });

    return items;
};

export const getPost = async (postId: string): Promise<Contentful.Entry<Post>> => {
    const post = await client.getEntry<Post>(postId);

    return post;
};
