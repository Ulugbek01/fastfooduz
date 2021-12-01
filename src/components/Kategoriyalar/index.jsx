import React,{useState} from 'react'
import Header from '../Header';
import {categoryInfo} from '../../utils/category';
import { CategoryItem, Container, IconWrapper, MainContainer, Navbar } from './style';
import angry_face from '../../assets/imgs/angry-face.png';

const Kategoriyalar = () => {
    const [data, setData] = useState(categoryInfo);

    const onDelete = (id) => {
        let newData = data.filter((value)=> value.id !== id);
        setData(newData);
    }
    
    const showData = () => {
        
    }
    return (
        <MainContainer>
            <Header/>
            <Navbar>
                <h3>Kategoriya (Uz)</h3>
                <h3>Kategoriya (Ru)</h3>
                <h3>Bosh kategoriya</h3>
                <h3>Action</h3>
            </Navbar>
            <Container>
                {data.length > 0 ? data.map((item) => {
                    const {editIcon:Edit, deleteIcon:Delete} = item
                    return (
                        <CategoryItem key={item.id}>
                            <p>{item.kategoriyaUz}</p>
                            <p>{item.kategoriyaRu}</p>
                            <p>{item.boshKategoriya}</p>
                            <div className='action-container'>
                                <IconWrapper>
                                    <Edit/>
                                </IconWrapper>
                                <IconWrapper onClick={()=> onDelete(item.id)}>
                                    <Delete/>
                                </IconWrapper>
                            </div>
                        </CategoryItem>
                    )
                }) : <Container className='no-data'>
                        <p className='warning-info'>Ma'lumot yo'q</p>
                        <img src={angry_face} alt="angry-face" /><br />
                        <button onClick={showData} className='loading-btn'>Qayta yuklash</button>
                     </Container>}
            </Container>
        </MainContainer>
    )
}

export default Kategoriyalar;
