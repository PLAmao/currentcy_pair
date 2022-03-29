import React, { useState, useMemo } from 'react'
import { Form, Input, Button, Radio } from 'antd'
import { useNavigate } from 'react-router-dom'

import './index.scss'

const currencyPairs = ['EURUSD', 'GBPUSD']

const Main: React.FC = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()

  const [fromValues, setFormValues] = useState({
    type: currencyPairs[0],
    rate: '',
    left: '',
    right: '',
  })

  const pairsTypes = useMemo(() => {
    if (fromValues.type) {
      return [fromValues.type.slice(0, 3), fromValues.type.slice(-3)]
    } else {
      return []
    }
  }, [fromValues.type])


  const onFormValuesChange = () => {
    const values = form.getFieldsValue()
    setFormValues({ ...values })
    if (values.left && values.rate) {
      form.setFieldsValue({
        right: values.left * values.rate
      })
    } else {
      form.setFieldsValue({
        right: ''
      })
    }
  }

  const submit = () => {
    const formValue = form.getFieldsValue()
    navigate('/result', { state: {
      success: !(formValue.left > 1000000000 || formValue.right > 1000000000)
    } } )
  }

  return (
    <div className="flex flex-v flex-vc pt24">
      <Form
        form={form}
        initialValues={{ ...fromValues }}
        onValuesChange={onFormValuesChange}
        onFinish={submit}
      >
        <Form.Item name="type">
          <Radio.Group>
            {
              currencyPairs.map((item, index) => (
                <Radio.Button key={index} value={item}>{item}</Radio.Button>
              ))
            }
          </Radio.Group>
        </Form.Item>
        <div className="flex">
          <Form.Item name="left" rules={[{ required: true, message: 'please input' }]}>
            <Input type="number" step="0.0000001" min="0" addonBefore={pairsTypes[0]} />
          </Form.Item>
          <Form.Item name="rate" label="Client Rate" rules={[{ required: true, message: 'please input' }]}>
            <Input type="number" step="0.0000001" min="0" />
          </Form.Item>
        </div>
        <Form.Item name="right">
          <Input type="number" step="0.0000001" disabled min="0" addonBefore={pairsTypes[1]} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Main