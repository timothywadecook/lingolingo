import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { createProfile } from "../api/graphql/mutations";
import { profileByUserId } from "../api/graphql/queries";
import {
  Profile,
  CreateProfileInput,
  Grade,
  Reading,
} from "../api/passagesApi";
import { useAverageGrades } from "./useAverageGrades";
import { useUser } from "./useUser";

enum Theme {
  light = "light",
  dark = "dark",
}

export enum Languages {
  english = "english",
  spanish = "spanish",
}

export enum Difficulty {
  easy = "easy",
  medium = "medium",
  hard = "hard",
}

export const DEFAULT_PROFILE: EnhancedProfile = {
  id: undefined,
  userId: undefined,
  readings: undefined,
  grades: undefined,
  gradingLanguage: Languages.english,
  readingLanguage: Languages.spanish,
  difficulty: Difficulty.easy,
  theme: Theme.light,
  avgUnderstandable: 0,
  avgSoundsNative: 0,
  readingCount: 0,
};

type ProfileStats = {
  avgUnderstandable: number;
  avgSoundsNative: number;
  readingCount: number;
};

export type EnhancedProfile = Partial<Profile> & ProfileStats;

export function useProfile(): EnhancedProfile {
  const user = useUser();

  const [profile, setProfile] = useState(DEFAULT_PROFILE);

  const { grades, readings } = profile;
  const _grades = ((grades && grades.items) || []) as Grade[];
  const _readings = ((readings && readings.items) || []) as Reading[];
  const { understandable, soundsNative } = useAverageGrades(_grades);

  const fetchOrCreateProfile = async () => {
    if (user) {
      const userId = user.id;

      const _profile = (
        await API.graphql(
          graphqlOperation(profileByUserId, {
            userId,
          })
        )
      ).data?.profileByUserId?.items[0];
      console.log("user", user);
      console.log("_profile??", _profile);

      if (_profile) setProfile(_profile);

      if (!_profile) {
        const input: CreateProfileInput = {
          userId: user.id,
          gradingLanguage: Languages.english,
          readingLanguage: Languages.spanish,
          difficulty: Difficulty.easy,
          theme: Theme.light,
        };
        const newProf = await API.graphql(
          graphqlOperation(createProfile, { input })
        ).data.createProfile;
        setProfile(newProf);
      }
    }
  };

  useEffect(() => {
    fetchOrCreateProfile();
  }, [user]);

  return {
    ...profile,
    avgUnderstandable: understandable,
    avgSoundsNative: soundsNative,
    readingCount: _readings.length,
  };
}
