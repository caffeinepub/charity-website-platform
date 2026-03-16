import Array "mo:core/Array";
import List "mo:core/List";
import Time "mo:core/Time";
import MixinStorage "blob-storage/Mixin";

actor {
  include MixinStorage();

  type ContactEntry = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let contactEntries = List.empty<ContactEntry>();

  public shared ({ caller }) func submitContactEntry(name : Text, email : Text, message : Text) : async () {
    let entry : ContactEntry = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    contactEntries.add(entry);
  };

  public query ({ caller }) func getAllEntries() : async [ContactEntry] {
    contactEntries.toArray();
  };
};
