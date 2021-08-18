import React, { useState } from 'react';

function App() {
  // Khai báo 1 biến trạng thái mới đặt tên là "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Bạn đã bấm {count} lần</p>
      <button onClick={() => setCount(count + 1)}>
        Bấm vào tôi
      </button>
    </div>
  );
}

export default App