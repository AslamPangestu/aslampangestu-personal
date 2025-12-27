/// Main Module
import Page from "./Page";
import Post from "./Post";
import Project from "./Project";
import User from "./User";

/// Block Module
import BlockContent from "./BlockContent";
import Contact from "./Contact";
import Skill from "./Skill";
import Role from "./Role";
import PostTag from "./PostTag";
import CallToAction from "./CallToAction";

/// Component Module
import Duration from "./Duration";
import KeyValue from "./KeyValue";

/**
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default [
  Duration,
  KeyValue,
  Page,
  BlockContent,
  Post,
  PostTag,
  Project,
  Contact,
  Skill,
  Role,
  CallToAction,
  User,
];
