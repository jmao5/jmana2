import classNames from "classnames";

export default function PlanIdPage({ params }: { params: { toonId: string } }) {
  const { toonId } = params;

  // Example chapter data (replace with your actual chapter data)
  const chapters = [
    { id: 1, title: "1화", date: "2024.03.01" },
    { id: 2, title: "2화", date: "2024.03.08" },
    { id: 3, title: "3화", date: "2024.03.15" },
    { id: 4, title: "4화", date: "2024.03.22" },
    { id: 5, title: "5화", date: "2024.03.29" },
  ];

  return (
    <div className={classNames("plans-page")}>
      <div className="flex items-start justify-center bg-white p-6">
        <div className="w-1/4 flex-shrink-0">
          <img
            src="https://newtoki.help/data/wtimg/1684405028_77983069162733.jpg"
            alt="독립일기"
            className="rounded-lg shadow-md h-40"
          />
        </div>
        <div className="w-3/4 ml-6 flex-grow">
          <h1 className="text-3xl font-semibold mb-2">독립일기</h1>
          <p className="text-gray-600 text-sm mb-2">드라마, 일상</p>
          <p className="text-base leading-relaxed">
            별별 일상들 속에서 벌어지는 이야기들, 독립생활이란 도대체 무엇인가?
            여러분의 독립적인 일상을 응원합니다.
          </p>
        </div>
      </div>

      <div className="mt-6 p-6">
        <ul className="divide-y divide-gray-300">
          {/* Map over the chapters array and render each chapter */}
          {chapters.map((chapter) => (
            <li
              key={chapter.id}
              className="py-4 flex justify-between items-center"
            >
              <a
                href={`#${chapter.id}`}
                className="flex-grow text-lg font-semibold text-blue-600 hover:underline"
              >
                {chapter.title}
              </a>
              <span className="text-gray-600 ml-4">{chapter.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
