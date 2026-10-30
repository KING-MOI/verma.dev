import { getCollection } from "astro:content";
import { byNewest, isPublished } from "./posts";

export async function getPosts() {
  return byNewest(await getCollection("writing", (post) => isPublished(post)));
}
