import React from "react"
import {StaticQuery,graphql} from "gatsby"
import Layout from "../components/layout"

const getMarkdownPosts=graphql`
{
    allMarkdownRemark{
        totalCount
  edges{
  
  node{
    id
    frontmatter{
      title
      date
      
    }
    excerpt
  }
  }
  }
  }
`
export default ()=>(
    <Layout>
        <div>
            <h3 style={{display:"inline-block",borderBottom:"1px solid"}}>Fetching Blog Data</h3>
        <StaticQuery
        query={getMarkdownPosts}
        render={data=>(
            <>
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            
                {data.allMarkdownRemark.edges.map(({node})=>(
                   <div key={node.id}>
                       <h5>{node.frontmatter.title}<span style={{color:"#bbb"}}>-{node.frontmatter.date}</span></h5>
                        <p>{node.excerpt}</p>
                   </div>
                ))}
            </>
        )}
        />
        
        </div>
    </Layout>
)