import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { updateWeight, updateProperties } from  '../../redux/reducers/dish'

const Row = (props) => {
  const dispatch = useDispatch()
  const product = useSelector((s) => Object.values(s.pure.dish).find(it => it.name === props.name))
  const weight = product ? product.weight : 0

  const onChange = (e) => dispatch(updateWeight(props.name, parseInt(e.target.value)||0))

  const apiKey = process.env.REACT_APP_API_KEY;

  const search = (res, nutrient) => res.find(
    (obj) => obj.nutrientId === nutrient
  )


  useEffect(() => {
    const getData = async (name) => {
      const response = await axios.get(
        `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${name}`
      )
      .then(res => res.data.foods[0].foodNutrients)
      .catch(err => {})

      dispatch(updateProperties(props.name, 'energy', Math.round(search(response, 1008).value / 100 * product.weight * 10 )/10))
      dispatch(updateProperties(props.name, 'protein', Math.round(search(response, 1003).value / 100 * product.weight * 10 )/10))
      dispatch(updateProperties(props.name, 'lipid', Math.round(search(response, 1004).value / 100 * product.weight * 10) /10))
      dispatch(updateProperties(props.name, 'carbohydrate', Math.round(search(response, 1005).value / 100 * product.weight * 10) /10))
      
    };

    getData(props.name);
  }, [product.weight]);

  return (
    weight === 0 ? null : <tr className="border-t border-gray-200">
      <td className="px-1 py-2">{product.item}</td>
      <td className="px-1 py-2"><input type="number" onChange={onChange} min='0' className='w-14' value={weight}/></td>
      <td className="px-1 py-2">{product.energy}</td>
      <td className="px-1 py-2">{product.protein}</td>
      <td className="px-1 py-2">{product.lipid}</td>
      <td className="px-1 py-2">{product.carbohydrate}</td>
    </tr>
  );
};

export default Row;