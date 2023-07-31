import Head from "next/head";
import Image from "next/image";
import Nav from "./Nav";
import metadata from "@/data/metadata";

const Container = (props: any) => {
  return (
    <div className="w-full flex flex-col items-center p-3">
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <header className="w-full max-w-3xl flex justify-between items-center my-1">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
            objectFit="cover"
            className="rounded-full"
          />
          <span className={`mx-2 font-extralight text-lg`}>
            {metadata.title}
          </span>
        </div>
        <Nav />
      </header>
      <main className="w-full max-w-3xl">{props.children}</main>
    </div>
  );
};

export default Container;
