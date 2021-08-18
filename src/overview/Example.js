import React, { useState, useEffect } from 'react';

function Example() {
    const [count, setCount] = useState(0);

    // Giống componentDidMount và componentDidUpdate:
    useEffect(() => {
        // Cập nhật tiêu đề trang web sử dụng API trình duyệt
        document.title = `Bạn đã bấm-- ${count} --lần`;
    });

    return (
        <div>
            <p>Bạn đã bấm {count} lần</p>
            <button onClick={() => setCount(count + 1)}>
                Bấm vào tôi
            </button>
        </div>
    );
}

export default Example