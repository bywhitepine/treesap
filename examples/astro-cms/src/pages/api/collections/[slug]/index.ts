import type { APIRoute } from 'astro';
import { treesap } from "@/treesap/treesap";

export const POST: APIRoute = async ({ params, request }) => {
  const slug = params.slug;
  const data = await request.json();

  await treesap.create({
    collection: slug,
    data,
  });
  return new Response(
    JSON.stringify({ success: true })
  )
}


export const GET: APIRoute = async ({ params, request }) => {
  const slug = params.slug;
  const collection = await treesap.find(slug);
  return new Response(
    JSON.stringify(collection)
  )
}
