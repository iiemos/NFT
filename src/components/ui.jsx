// 共享基础 UI 组件
export function Icon({ children, className = "" }) {
  return <span className={`material-symbols-outlined ${className}`}>{children}</span>;
}

export function Panel({ children, className = "" }) {
  return <article className={`panel ${className}`}>{children}</article>;
}

export function Progress({ value }) {
  return (
    <div className="progress">
      <span style={{ width: `${value}%` }}></span>
    </div>
  );
}
