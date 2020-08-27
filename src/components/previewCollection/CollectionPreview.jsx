import React from 'react'
import './collection-previev.styles.scss'
import CollectionItem from "../collectionItem/CollectionItem";

const CollectionPreview = ({title, items}) => (
    <div className={'collection-preview'}>
        <h1 className={'title'}>{title.toUpperCase()}</h1>
        <div className={'preview'}>
            {items
                .filter((id, index) => index < 4)
                .map((item) => (
                <CollectionItem key={item.id} item={item}/>
            ))}
        </div>
    </div>
)

export default CollectionPreview;
