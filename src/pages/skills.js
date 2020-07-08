import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Skill from "../components/skill"


export default ({ data, transitionStatus }) => {
  let allSkills = []
  if (((data || {}).allMarkdownRemark || {}).edges) {
    allSkills = data.allMarkdownRemark.edges.reduce(
      (
        mySkills,
        {
          node: {
            frontmatter: { skills },
          },
        }
      ) => {
        if (skills) {
          const currentSkils = skills.reduce((acumSkills, currentSkill) => {
            // If the skill don't exists in array add it
            if (!mySkills.find(({ title }) => title === currentSkill.title)) {
              acumSkills.push(currentSkill)
            }
            return acumSkills
          }, [])
          return [...mySkills, ...currentSkils]
        }
        return mySkills
      },
      []
    )
  }


  return (
    <Layout title={`Skills`} bgClassName={`skill`} fixedMenuPosition={true}>
      <Helmet>
        <title>Skills | Tien Pham</title>
      </Helmet>

      <Skill
        skills={allSkills}
        type="scrollable"
        title="Skills"
        description="These are the skills that I have acquired through my years of
            experience working as a software developer, the order is based on
            the ones I like most and or I have used."
        transitionStatus={transitionStatus}
      />
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            skills {
              title
              image {
                childImageSharp {
                  fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`