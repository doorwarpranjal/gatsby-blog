import React, { useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Spacer from '../atoms/Spacer'
import CategoryBlock from '../organisms/CategoryBlock'
import Footer from '../organisms/Footer'
import Header from '../organisms/Header'
import useImageData from '../functions/useImageData'

const ArticlesPage = ({ location }) => {
	const { state = {} } = location
	const { name } = state

	const [mobile] = useImageData()

	const data = useStaticQuery(graphql`
		query ArticlesPageQuery {
			allMarkdownRemark {
				nodes {
					timeToRead
					frontmatter {
						title
						category
						thumbnail
						author
						date(formatString: "MMM-YY")
						path
					}
					excerpt(format: PLAIN, truncate: true, pruneLength: 100)
				}
				distinct(field: frontmatter___category)
			}
		}
	`)

	const { nodes, distinct } = data.allMarkdownRemark
	// distinct = array of categories
	// nodes = array of all articles
	const megaArrayOfCategories = distinct.sort().map((category) => {
		const articlesInThisCategory = nodes.filter((article) => {
			return article?.frontmatter?.category === category
		})
		return [category, articlesInThisCategory]
	})

	useEffect(() => {
		if (name) {
			const element = document.getElementById(name)
			element?.scrollIntoView()
		}
	}, [name])

	return (
		<>
			<Header />
			<Spacer y={mobile ? 30 : 80} />
			{megaArrayOfCategories.map((category, key) => (
				<CategoryBlock category={category} key={key} />
			))}
			<Footer />
		</>
	)
}

export default ArticlesPage
