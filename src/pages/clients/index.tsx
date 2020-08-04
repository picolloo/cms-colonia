import Link from "next/link";
import { GetStaticProps } from "next";
import { Client } from "../../@types";

interface ClientList {}

export default function ClientList({}: ClientList) {
  return (
    <div>
      <div>
        <Link href="/">Voltar</Link>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
