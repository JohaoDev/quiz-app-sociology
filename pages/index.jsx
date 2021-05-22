import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <button onClick={() => router.push("/quiz")}>Empezar</button>
    </div>
  );
}
