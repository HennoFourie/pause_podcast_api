import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Account from "../components/Account";

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className='bg-dark h-screen overflow-hidden'>
      <Head>
        <title>Pause</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/meta/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/meta/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/meta/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/meta/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/assets/meta/safari-pinned-tab.svg"
          color="#488b49"
        />
        <link rel="shortcut icon" href="/assets/meta/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="Pause" />
        <meta name="application-name" content="Pause" />
        <meta name="msapplication-TileColor" content="#488b49" />
        <meta
          name="msapplication-config"
          content="/assets/meta/browserconfig.xml"
        />
        <meta name="theme-color" content="#488b49" />
      </Head>

      {!session ? (
        <div className="flex flex-col items-center min-h-screen w-full justify-center">
          <img className="w-40 mb-5" src="p_logo_rounded.png" alt="" />
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa, 
              variables: {
                default: {
                  colors: {
                    brand: '#488b49',
                    brandAccent: '#488b49',
                  },
                },
              },
            }}
            theme="dark"
        />
        </div>
      ) : (
        <>

            <main>
              <Sidebar />
              {/* Center */}
            </main>

            <div>{/* Player */}</div>

            <Account session={session} />
        </>
      )}
    </div>
  );
};

export default Home;
