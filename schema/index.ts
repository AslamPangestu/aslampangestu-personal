/// Main Module
import Page from "./Page";
import Post from "./Post";
import Project from "./Project";
import User from "./User";
import BlockContent from "./BlockContent";

// Block Module
import Contact from "./Contact";
import Skill from "./Skill";
import Role from "./Role";

/// Component Module
import CallToAction from "./CallToAction";
import Duration from "./Duration";

/**
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default [
  Duration,
  Page,
  Post,
  Project,
  User,
  BlockContent,
  Contact,
  Skill,
  Role,
  CallToAction,
];
