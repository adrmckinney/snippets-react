// @flow

import React, { useMemo } from 'react'
import Card from '../../_generic/Card/Card'
import CardBody from '../../_generic/Card/card-body'
import CardHeader from '../../_generic/Card/card-header'
import DescriptionList from '../../_generic/Lists/description-list'

type Props = {
  prop: Object,
}

const PropsCard = ({ prop }: Props) => {
  const propData = useMemo(
    () => [
      {
        title: 'Name',
        data: prop?.prop_name,
        colSpan: '1',
      },
      {
        title: 'Type',
        data: prop?.prop_type,
        colSpan: '1',
      },
      {
        title: 'Optional/Required',
        data: prop?.required,
        colSpan: '1',
      },
      {
        title: 'Description',
        data: prop?.prop_description,
        colSpan: '2',
      },
    ],
    [prop?.prop_name, prop?.prop_type, prop?.prop_description, prop?.required]
  )
  console.log('prop', prop)
  return (
    <>
      {propData?.map((prop, idx) => (
        <Card
          key={`prop-${prop?.title}-${idx}`}
          header={<CardHeader title={'Props'} subTitle={'These are props'} />}
          body={
            <CardBody>
              <DescriptionList title={prop?.title} data={prop?.data} colSpan={prop?.colSpan} />
            </CardBody>
          }
        />
      ))}
    </>
  )
}

export default PropsCard
