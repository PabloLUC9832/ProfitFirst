import {synchronize} from "@nozbe/watermelondb/sync";
import database from "./index";
import {supabase} from "../lib/supabase";

export async function mySync() {
  await synchronize({
    database,
    sendCreatedAsUpdated: true,
    pullChanges: async ({ lastPulledAt, schemaVersion, migration }) => {
      console.log(`pulling changes:`);

      const { data,error } = await supabase.rpc('pull',{
        last_pulled_at: lastPulledAt,
        schemaversion: schemaVersion,
        migration: migration,
      });
      console.log('error',error);
      console.log(data);
      return {
        changes: data.changes,
        timestamp: data.timestamp,
      };
    },
    pushChanges: async ({ changes, lastPulledAt }) => {
      console.log(`Pushing changes:`);

      const { error } =  await supabase.rpc('push', {changes});

      console.log(changes);
      console.log(error);
    },
  });
}
//3:25