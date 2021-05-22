import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative pt-14 pb-32 flex h-screen content-center items-center justify-center text-white">
      <div
        className="absolute top-0 w-full h-full bg-cover"
        style={{
          backgroundImage: "url('/bg-app1.jpg')",
        }}
      >
        <span className="w-full h-full absolute opacity-75 bg-black"></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="m-3">
              <button
                onClick={() => router.push("/quiz")}
                className="bg-white text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
              >
                <span className="mr-2 animate-pulse">Empezar</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="animate-pulse"
                >
                  <path
                    fill="currentcolor"
                    d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
