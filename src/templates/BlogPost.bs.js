// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Bio from "../components/Bio.bs.js";
import * as SEO from "../components/SEO.bs.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Layout from "../components/Layout.bs.js";
import * as Gatsby from "gatsby";
import * as Js_dict from "bs-platform/lib/es6/js_dict.js";
import * as Js_json from "bs-platform/lib/es6/js_json.js";
import * as ReactDOMRe from "reason-react/src/ReactDOMRe.js";
import * as Typography from "../utils/Typography.bs.js";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

var query = (graphql`
  query BlogPostBySlug($slug: String!)  {
    site  {
      siteMetadata  {
        title
      }
    }
  markdownRemark(fields: {slug: {eq: $slug}})  {
    id
    excerpt(pruneLength: 160)
    html
    frontmatter  {
      title
      date(formatString: "MMMM DD, YYYY")
      description
    }
  }
}
`);

function parse(value) {
  var value$1 = value["site"];
  var tmp;
  if (value$1 == null) {
    tmp = undefined;
  } else {
    var value$2 = value$1["siteMetadata"];
    var tmp$1;
    if (value$2 == null) {
      tmp$1 = undefined;
    } else {
      var value$3 = value$2["title"];
      tmp$1 = {
        title: (value$3 == null) ? undefined : value$3
      };
    }
    tmp = {
      siteMetadata: tmp$1
    };
  }
  var value$4 = value["markdownRemark"];
  var tmp$2;
  if (value$4 == null) {
    tmp$2 = undefined;
  } else {
    var value$5 = value$4["excerpt"];
    var value$6 = value$4["html"];
    var value$7 = value$4["frontmatter"];
    var tmp$3;
    if (value$7 == null) {
      tmp$3 = undefined;
    } else {
      var value$8 = value$7["title"];
      var value$9 = value$7["date"];
      var value$10 = value$7["description"];
      tmp$3 = {
        title: (value$8 == null) ? undefined : value$8,
        date: (value$9 == null) ? undefined : Caml_option.some(value$9),
        description: (value$10 == null) ? undefined : value$10
      };
    }
    tmp$2 = {
      id: value$4["id"],
      excerpt: (value$5 == null) ? undefined : value$5,
      html: (value$6 == null) ? undefined : value$6,
      frontmatter: tmp$3
    };
  }
  return {
          site: tmp,
          markdownRemark: tmp$2
        };
}

function serializeVariables(inp) {
  return Js_dict.fromArray([/* tuple */[
                    "slug",
                    Caml_option.some(inp.slug)
                  ]].filter((function (param) {
                      return param[1] !== undefined;
                    })).map((function (param) {
                    var match = param[1];
                    var k = param[0];
                    if (match !== undefined) {
                      return /* tuple */[
                              k,
                              Caml_option.valFromOption(match)
                            ];
                    } else {
                      return /* tuple */[
                              k,
                              null
                            ];
                    }
                  })));
}

function makeVar(f, slug, param) {
  return Curry._1(f, serializeVariables({
                  slug: slug
                }));
}

function makeVariables(param, param$1) {
  return serializeVariables({
              slug: param
            });
}

function makeWithVariables(variables) {
  return {
          query: query,
          variables: serializeVariables(variables),
          parse: parse
        };
}

var definition = /* tuple */[
  parse,
  query,
  makeVar
];

function BlogPost(Props) {
  var data = Props.data;
  var pageContext = Props.pageContext;
  var $$location = Props.location;
  var data$1 = parse(data);
  var match = data$1.site;
  if (match !== undefined) {
    var match$1 = match.siteMetadata;
    if (match$1 !== undefined) {
      var match$2 = match$1.title;
      if (match$2 !== undefined) {
        var match$3 = data$1.markdownRemark;
        if (match$3 !== undefined) {
          var match$4 = match$3;
          var match$5 = match$4.html;
          if (match$5 !== undefined) {
            var match$6 = match$4.frontmatter;
            if (match$6 !== undefined) {
              var match$7 = match$6;
              var match$8 = match$7.title;
              if (match$8 !== undefined) {
                var title = match$8;
                var match$9 = pageContext.previous;
                var tmp;
                if (match$9 == null) {
                  tmp = null;
                } else {
                  var slug = match$9.fields.slug;
                  var title$1 = match$9.frontmatter.title;
                  tmp = React.createElement(Gatsby.Link, {
                        children: "← " + (String(title$1) + " "),
                        to: slug
                      });
                }
                var match$10 = pageContext.next;
                var tmp$1;
                if (match$10 == null) {
                  tmp$1 = null;
                } else {
                  var slug$1 = match$10.fields.slug;
                  var title$2 = match$10.frontmatter.title;
                  tmp$1 = React.createElement(Gatsby.Link, {
                        children: "" + (String(title$2) + " →"),
                        to: slug$1
                      });
                }
                return React.createElement(Layout.make, {
                            location: $$location,
                            title: match$2,
                            children: null
                          }, React.createElement(SEO.make, {
                                description: Belt_Option.getWithDefault(match$7.description, Belt_Option.getWithDefault(match$4.excerpt, "")),
                                title: title
                              }), React.createElement("article", undefined, React.createElement("header", undefined, React.createElement("h1", {
                                        style: {
                                          marginTop: Typography.rhythm(1),
                                          marginBottom: "0px"
                                        }
                                      }, title), React.createElement("p", {
                                        style: ReactDOMRe.Style.combine(Typography.scale(-1 / 5), {
                                              display: "block",
                                              marginBottom: Typography.rhythm(1)
                                            })
                                      }, Belt_Option.getWithDefault(Belt_Option.flatMap(match$7.date, Js_json.decodeString), ""))), React.createElement("section", {
                                    dangerouslySetInnerHTML: {
                                      __html: match$5
                                    }
                                  }), React.createElement("hr", {
                                    style: {
                                      marginBottom: Typography.rhythm(1)
                                    }
                                  }), React.createElement("footer", undefined, React.createElement(Bio.make, { }))), React.createElement("nav", undefined, React.createElement("ul", {
                                    style: {
                                      display: "flex",
                                      listStyle: "none",
                                      padding: "0px",
                                      flexWrap: "wrap",
                                      justifyContent: "space-between"
                                    }
                                  }, React.createElement("li", undefined, tmp), React.createElement("li", undefined, tmp$1))));
              } else {
                return null;
              }
            } else {
              return null;
            }
          } else {
            return null;
          }
        } else {
          return null;
        }
      } else {
        return null;
      }
    } else {
      return null;
    }
  } else {
    return null;
  }
}

var make = BlogPost;

var $$default = BlogPost;

var pageQuery = query;

export {
  query ,
  parse ,
  serializeVariables ,
  makeVar ,
  makeVariables ,
  makeWithVariables ,
  definition ,
  make ,
  $$default ,
  $$default as default,
  pageQuery ,
  
}
/* query Not a pure module */
