import React from 'react';

const ImageList = ({ images, loading }) => {
    let renderImages = () => {
        return images.map(image => {
            return (
                <div
                    key={image.id}
                    style={{
                        width: '20%',
                        height: '200px',
                        backgroundColor: image.color,
                        margin: '5px',
                    }}>
                    {image.urls.full ? (
                        <img
                            src={image.urls.full}
                            style={{ width: '100%', height: '100%' }}
                            alt={image.alt_description}
                        />
                    ) : (
                        <img
                            src="/images/wireframe/image-text.png"
                            alt={'loading'}
                        />
                    )}
                </div>
            );
        });
    };
    return loading === true ? (
        <div className="ui active inverted dimmer">
            <div className="ui text loader">getting images ...</div>
        </div>
    ) : (
        renderImages()
    );
};

export default ImageList;
/* */
