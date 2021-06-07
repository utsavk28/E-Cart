import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../redux/Category/actions'
import { fetchProducts } from '../../redux/Products/actions';

const useInitialLoad = () => {
    const dispatch = useDispatch()
    const { category, product } = useSelector(state => state)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(category.loading && product.loading)
        dispatch(fetchCategories());
        dispatch(fetchProducts());

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    


    return { loading }
}

export default useInitialLoad
