import React, { Fragment } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Spacer from '../../atoms/Spacer'
import PopularArticle from '../../molecules/PopularArticle'

import styles from './index.module.css'

const PopularArticlesContainer = () => {
	const data = useStaticQuery(graphql`
		query PopularQuery {
			allMarkdownRemark(
				limit: 2
				filter: { frontmatter: { EditorChoice: { eq: false } } }
			) {
				edges {
					node {
						id
						excerpt(pruneLength: 75)
						frontmatter {
							title
							path
						}
					}
				}
			}
		}
	`)

	const articles = data?.allMarkdownRemark?.edges

	return (
		<div className={styles.container}>
			{articles.map((article, index) => (
				<Fragment key={index}>
					{index !== 0 && <Spacer x={40} />}
					<PopularArticle article={article} key={index} />
				</Fragment>
			))}
		</div>
	)
}

export default PopularArticlesContainer
