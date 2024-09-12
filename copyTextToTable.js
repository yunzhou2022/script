function transformToTable(str) {
  const trs = str.split("\n").map((d) => {
    const inner = d
      .split(":")
      .map((d) => `<td style="border: 1px solid rgb(222, 224, 227)">${d}</td>`);
    return `<tr>${inner.join("")}</tr>`;
  });

  return `
  <table>
<colgroup>
  <col width="100" />
</colgroup>
<tbody>
  ${trs.join("")}
</tbody>
</table>
`;
}

function initCopy(str) {
  const res = transformToTable(str);
  document.addEventListener("copy", function (e) {
    // e.clipboardData is initially empty, but we can set it to the
    // data that we want copied onto the clipboard.
    e.clipboardData.setData("text/plain", "Hello, world!");
    e.clipboardData.setData("text/html", res);

    // This is necessary to prevent the current document selection from
    // being written to the clipboard.
    e.preventDefault();
  });
}

const str = `a:1
b:2
c:3
`;

initCopy(str);
// 粘贴到浏览器的console中，然后随便复制一个内容。
