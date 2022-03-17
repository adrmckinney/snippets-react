// @flow

import React, { useMemo } from 'react'
import Card from '../../../_generic/Card/Card'
import CardBody from '../../../_generic/Card/card-body'
import CardHeader from '../../../_generic/Card/card-header'
import DescriptionList from '../../../_generic/Lists/description-list'
import ResponsiveGridLayout from '../../../_generic/responsive-grid-layout'

type Props = {
  value: Object,
}

const ReturnValuesCard = ({ value }: Props) => {
  console.log('value', value)
  const propData = useMemo(
    () => [
      {
        title: 'Name',
        data: value?.name,
        colSpan: '1',
      },
      {
        title: 'Type',
        data: value?.type,
        colSpan: '1',
      },
      {
        title: 'Description',
        data: value?.description,
        colSpan: '2',
      },
    ],
    [value?.name, value?.type, value?.description]
  )

  const noValues = value.name === null && value.type === null && value.description === null

  return (
    <>
      <Card
        header={
          <CardHeader
            title={noValues ? 'Return Values ' : `Return Value: ${value.name}`}
            subTitle={noValues ? 'There are no return values' : ''}
          />
        }
        body={
          !noValues ? (
            <CardBody>
              <ResponsiveGridLayout
                as={'dl'}
                cols={{ mbl: '1', sm: '2' }}
                colGap={{ mbl: '8' }}
                rowGap={{ mbl: '4' }}
              >
                {propData?.map((prop, idx) => (
                  <DescriptionList
                    key={`prop-${prop?.title}-${idx}`}
                    title={prop?.title}
                    data={prop?.data}
                    colSpan={prop?.colSpan}
                  />
                ))}
              </ResponsiveGridLayout>
            </CardBody>
          ) : null
        }
      />
    </>
  )
}

export default ReturnValuesCard
