import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { ContactEntry } from "../backend";
import { useActor } from "./useActor";

export function useGetAllEntries() {
  const { actor, isFetching } = useActor();

  return useQuery<ContactEntry[]>({
    queryKey: ["contactEntries"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllEntries();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitContactEntry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      name,
      email,
      message,
    }: { name: string; email: string; message: string }) => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.submitContactEntry(name, email, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contactEntries"] });
    },
  });
}
