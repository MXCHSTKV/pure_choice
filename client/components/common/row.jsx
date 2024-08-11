import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { updateWeight, updateProperties } from  '../../redux/reducers/dish'
import axios from 'axios';

const Row = (props) => {
  const dispatch = useDispatch()
  const product = useSelector((s) => Object.values(s.pure.dish).find(it => it.name === props.name))
  const weight = product ? product.weight : 0

  const changeWeight = (e) => dispatch(updateWeight(props.name, Math.min(parseInt(e.target.value), 10000)||0))

  const usdaApi = process.env.REACT_APP_USDA_API;

  const nutrientSearch = (res, nutrient) => res.find(
    (obj) => obj.nutrientId === nutrient
  )


  useEffect(() => {
    const getProductData = async (name) => {
      const response = await axios.get(`${usdaApi}&query=${name}`)
      .then(res => res.data.foods[0].foodNutrients)
      .catch(err => {})

      dispatch(updateProperties(props.name, 'energy', Math.round(nutrientSearch(response, 1008).value / 100 * product.weight * 10 )/10))
      dispatch(updateProperties(props.name, 'protein', Math.round(nutrientSearch(response, 1003).value / 100 * product.weight * 10 )/10))
      dispatch(updateProperties(props.name, 'lipid', Math.round(nutrientSearch(response, 1004).value / 100 * product.weight * 10) /10))
      dispatch(updateProperties(props.name, 'carbohydrate', Math.round(nutrientSearch(response, 1005).value / 100 * product.weight * 10) /10))
      
    };

    getProductData(props.name);
  }, [product.weight]);

  return (
    weight === 0 ? null : <tr className="border-t border-gray-200">
      <td className="px-1 py-2 max-w-[145px] sm:max-w-xs md:max-w-lg overflow-hidden">{product.item}</td>
      <td className="px-1 py-2"><input type="number" onChange={changeWeight} min='0' max='10000' className='w-14' value={weight}/></td>
      <td className="px-1 py-2">{product.energy}</td>
      <td className="px-1 py-2">{product.protein}</td>
      <td className="px-1 py-2">{product.lipid}</td>
      <td className="px-1 py-2">{product.carbohydrate}</td>
    </tr>
  );
};

export default Row;