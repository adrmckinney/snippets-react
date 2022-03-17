// @flow

import React, { useMemo } from 'react'
import Card from '../../../_generic/Card/Card'
import CardBody from '../../../_generic/Card/card-body'
import CardHeader from '../../../_generic/Card/card-header'
import DescriptionList from '../../../_generic/Lists/description-list'
import ResponsiveGridLayout from '../../../_generic/responsive-grid-layout'

type Props = {
  prop: Object,
}

const PropsCard = ({ prop }: Props) => {
  const propData = useMemo(
    () => [
      {
        title: 'Type',
        data: prop?.type,
        colSpan: '1',
      },
      {
        title: 'Optional/Required',
        data: prop?.required,
        colSpan: '1',
      },
      {
        title: 'Description',
        data: prop?.description,
        colSpan: '2',
      },
    ],
    [prop?.type, prop?.description, prop?.required]
  )

  const noProps =
    prop.name === null && prop.type === null && prop.description === null && prop.required === null

  return (
    <>
      <Card
        header={
          <CardHeader
            title={noProps ? 'Props' : `Prop Name: ${prop.name}`}
            subTitle={noProps ? 'There are no props' : ''}
          />
        }
        body={
          !noProps ? (
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

export default PropsCard
