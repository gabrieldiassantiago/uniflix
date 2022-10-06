import { Navbar } from "components/Navbar"
import {Container, Content} from './style'
type ILayoutProps = {
    children: React.ReactNode
}


const Layout = (  {children}: ILayoutProps  ) => {
    return <Container>
        <Navbar />
        
        <Content> 
            {children}
        </Content>
    </Container>
}
export {Layout}