import { useState, useEffect } from "react";
import { Auth } from "aws-amplify";

export function useUser() {
  const [user, setUser] = useState<{ id: number } | null>(null);

  useEffect(() => {
    (async () => {
      setUser(await Auth.currentUserInfo());
    })();
  }, []);

  return user;
}
