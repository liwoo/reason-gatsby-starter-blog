// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Gatsby from "gatsby";
import * as Typography from "../utils/Typography.bs.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as GatsbyImage from "../bindings/gatsby-image/GatsbyImage.bs.js";
import * as GatsbyImage$1 from "gatsby-image";

let { graphql } = require("gatsby")
;

var query = (graphql`
  query BioQuery  {
  avatar: file(absolutePath: {regex: "/profile-pic.jpg/"})  {
    childImageSharp  {
      fixed(width: 50, height: 50)  {
        ...GatsbyImageSharpFixed
      }
    }
  }
  site  {
    siteMetadata  {
      author
      social  {
        twitter
      }
    }
  }
}
`);

function parse(value) {
  var value$1 = value["avatar"];
  var tmp;
  if (value$1 == null) {
    tmp = undefined;
  } else {
    var value$2 = value$1["childImageSharp"];
    var tmp$1;
    if (value$2 == null) {
      tmp$1 = undefined;
    } else {
      var value$3 = value$2["fixed"];
      tmp$1 = {
        fixed: (value$3 == null) ? undefined : Curry._1(GatsbyImage.Fragments.GatsbyImageSharpFixed.parse, value$3)
      };
    }
    tmp = {
      childImageSharp: tmp$1
    };
  }
  var value$4 = value["site"];
  var tmp$2;
  if (value$4 == null) {
    tmp$2 = undefined;
  } else {
    var value$5 = value$4["siteMetadata"];
    var tmp$3;
    if (value$5 == null) {
      tmp$3 = undefined;
    } else {
      var value$6 = value$5["author"];
      var value$7 = value$5["social"];
      var tmp$4;
      if (value$7 == null) {
        tmp$4 = undefined;
      } else {
        var value$8 = value$7["twitter"];
        tmp$4 = {
          twitter: (value$8 == null) ? undefined : value$8
        };
      }
      tmp$3 = {
        author: (value$6 == null) ? undefined : value$6,
        social: tmp$4
      };
    }
    tmp$2 = {
      siteMetadata: tmp$3
    };
  }
  return {
          avatar: tmp,
          site: tmp$2
        };
}

function makeVar(f, param) {
  return Curry._1(f, null);
}

var definition = /* tuple */[
  parse,
  query,
  makeVar
];

function Bio(Props) {
  var data = parse(Gatsby.useStaticQuery(query));
  var match = data.avatar;
  var fixedImage;
  if (match !== undefined) {
    var match$1 = match.childImageSharp;
    if (match$1 !== undefined) {
      var match$2 = match$1.fixed;
      fixedImage = match$2 !== undefined ? [match$2] : undefined;
    } else {
      fixedImage = undefined;
    }
  } else {
    fixedImage = undefined;
  }
  var match$3 = data.site;
  var author;
  if (match$3 !== undefined) {
    var match$4 = match$3.siteMetadata;
    author = match$4 !== undefined ? match$4.author : undefined;
  } else {
    author = undefined;
  }
  var match$5 = data.site;
  var twitter;
  if (match$5 !== undefined) {
    var match$6 = match$5.siteMetadata;
    if (match$6 !== undefined) {
      var match$7 = match$6.social;
      twitter = match$7 !== undefined ? match$7.twitter : undefined;
    } else {
      twitter = undefined;
    }
  } else {
    twitter = undefined;
  }
  var tmp;
  if (fixedImage !== undefined) {
    var tmp$1 = {
      fixed: fixedImage,
      style: {
        marginRight: Typography.rhythm(0.5),
        marginBottom: "0px",
        minWidth: "50px",
        borderRadius: "100%"
      }
    };
    if (author !== undefined) {
      tmp$1.alt = Caml_option.valFromOption(author);
    }
    tmp = React.createElement(GatsbyImage$1.default, tmp$1);
  } else {
    tmp = null;
  }
  return React.createElement("div", {
              style: {
                display: "flex",
                marginBottom: Typography.rhythm(2.5)
              }
            }, tmp, author !== undefined && twitter !== undefined ? React.createElement("p", undefined, "Written by ", React.createElement("strong", undefined, author), " who lives and works in San Fransisco building useful things. ", React.createElement("a", {
                        href: "https://twitter.com/" + twitter
                      }, "You should follow him on Twitter")) : null);
}

var make = Bio;

export {
  query ,
  parse ,
  makeVar ,
  definition ,
  make ,
  
}
/*  Not a pure module */
