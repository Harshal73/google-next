import ImageSearchResults from "@/components/ImageSearchResults";

export default async function ImageSearchPage({ searchParams }) {
  const startIndex = searchParams.start || "1";
  await new Promise((resolve) => setTimeout(resolve, 10000));
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}
    &searchType=image&start=${startIndex}`
  );

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const data = await response.json();

  console.log(data);
  const results = data.items;
  return <> {results && <ImageSearchResults results={data} />} </>;
}
