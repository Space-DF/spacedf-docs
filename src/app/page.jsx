import { useMDXComponents as getMDXComponents } from '../../mdx-components'
import Content, { metadata, toc, sourceCode } from './content.mdx'

const Wrapper = getMDXComponents().wrapper

export function generateMetadata() {
  return metadata
}

export default function Page() {
  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <Content />
    </Wrapper>
  )
}
