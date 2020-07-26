import Link from "next/link";

interface Props {}

export default function Home({}: Props) {
  return (
    <div>
      <Link href="/">Voltar</Link>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
