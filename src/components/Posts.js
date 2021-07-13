import React from 'react';

export default function Post() {

    const abouttext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique, leo sed tincidunt elementum, felis nisl tempor nisl, id lacinia mauris ex ut neque. Aenean finibus enim egestas, luctus ex sit amet, placerat arcu. Morbi nec imperdiet enim. Nunc maximus tincidunt interdum. Nulla nisi lacus, faucibus at augue sed, venenatis finibus nibh. Cras nec hendrerit arcu, non accumsan nulla. Sed nisi turpis, sagittis non pellentesque sit amet, hendrerit id purus. Quisque ultricies sapien et venenatis gravida. Vestibulum lacus tellus, lacinia a nisi id, dignissim porta magna. Donec mattis pharetra sapien id pharetra. Maecenas dictum gravida tortor a dignissim.'

  return (
    <>
        <h2>Latest News</h2>
        <h3>Post 1</h3>
        <img align='left' alt='placeholder' src="https://via.placeholder.com/150" style={{margin: '20px 0 0px 25rem'}} /><p style={{margin: '20px 25rem'}}>{abouttext}</p>
        <br/>
        <h3>Post 2</h3>
        <img align='left' alt='placeholder' src="https://via.placeholder.com/150" style={{margin: '20px 0 0px 25rem'}} /><p style={{margin: '20px 25rem'}}>{abouttext}</p>
        <br/>
        <h3>Post 3</h3>
        <img align='left' alt='placeholder' src="https://via.placeholder.com/150" style={{margin: '20px 0 0px 25rem'}} /><p style={{margin: '20px 25rem'}}>{abouttext}</p>
        <br/>
    </>
  );
}
