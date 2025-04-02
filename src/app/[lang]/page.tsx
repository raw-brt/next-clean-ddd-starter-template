import { getDictionary } from "@/dictionaries";
import { Locale } from "@/dictionaries";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">
        {dict.navigation.home}
      </h1>
      <p className="text-xl">
        {dict.common.loading}
      </p>
    </main>
  );
} 