// @flow

import React, { useMemo } from 'react'
import Card from '../../../_generic/Card/Card'
import CardBody from '../../../_generic/Card/card-body'
import CardHeader from '../../../_generic/Card/card-header'
import DescriptionList from '../../../_generic/Lists/description-list'
import ResponsiveGridLayout from '../../../_generic/responsive-grid-layout'

type Props = {
  dependency: Object,
}

const DependenciesCard = ({ dependency }: Props) => {
  console.log('dependency', dependency)
  const propData = useMemo(
    () => [
      {
        title: 'Type',
        data: dependency?.type,
        colSpan: '1',
      },
      {
        title: 'Optional/Required',
        data: dependency?.optional_required,
        colSpan: '1',
      },
      {
        title: 'Description',
        data: dependency?.description,
        colSpan: '2',
      },
    ],
    [dependency?.type, dependency?.description, dependency.optional_required]
  )

  const noDependencies =
    dependency.name === null && dependency.type === null && dependency.description === null

  console.log('noDependencies', noDependencies)

  return (
    <>
      <Card
        header={
          <CardHeader
            title={noDependencies ? 'Dependencies' : `Dependency: ${dependency?.name}`}
            subTitle={noDependencies ? 'There are no dependencies' : ''}
          />
        }
        body={
          !noDependencies ? (
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

export default DependenciesCard
