import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import { GetStaticProps } from "next";
import { useQuery } from "react-query";
import { Generation, getPokemonGenerations } from "../lib/pokemons";
import Image from "next/image";

const Home = () => {
  const { error, data } = useQuery("generations", () =>
    getPokemonGenerations()
  );

  if (error) return <p>{JSON.stringify(error)}</p>;
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Click on one of the generations to see the details</p>
        {data && (
          <div className="flex flex-col sm:grid sm:grid-cols-4">
            {data.results.map((generation: Generation) => {
              return (
                <GenerationCard key={generation.name} generation={generation} />
              );
            })}
          </div>
        )}
      </section>
    </Layout>
  );
};

interface GenerationCardProps {
  generation: Generation;
}

const GenerationCard: React.FC<GenerationCardProps> = ({ generation }) => {
  return (
    <Link href={`/generations/${generation.name}`}>
      <div className="flex justify-between items-center px-4 py-8 bg-red-400 my-4 border-none shadow-lg w-full">
        <p className="text-sm capitalize">{generation.name}</p>
        {/* <div className="absolute stroke-gray-200 text-gray-200">
          <Image
            priority
            src="/images/pokeball-bg.svg"
            height={48}
            width={48}
            alt="pokeball-bg"
            className="text-gray-200 fill-gray-200 stroke-gray-200 "
          />
        </div> */}
      </div>
    </Link>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// };

export default Home;
