import { ChevronDownIcon } from "@heroicons/react/outline";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";
import Account from "../components/Account";

function Center({ session }) {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  // const [username, setUsername] = useState(null);
  const [fullname, setFullname] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`fullname, avatar_url`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        // setUsername(data.username);
        setFullname(data.fullname);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex-grow">
      <header className="absolute top-5 right-8">
        <div className="flex items-center bg-light space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
          <img
            className="rounded-full w-10 h-10"
            src={avatar_url}
            alt=""
          />
          <h2>{fullname}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
        <Account session={session} />
      </header>

      <section className={`flex items-end space-x-7 bg-gradient-to-b to-light from-primary h-60 text-white p-8`}>
        <h1>hello</h1>
      </section>
    </div>
  );
}

export default Center;
