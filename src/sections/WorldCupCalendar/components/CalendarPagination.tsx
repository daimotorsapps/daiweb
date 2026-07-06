interface CalendarPaginationProps {
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  currentStart: number;
  currentEnd: number;
  total: number;
}

export default function CalendarPagination({
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  currentStart,
  currentEnd,
  total,
}: CalendarPaginationProps) {
  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      <button
        onClick={onPrev}
        disabled={!hasPrev}
        className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
          hasPrev
            ? "bg-blue-950 text-white hover:bg-blue-900 active:scale-95"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        Anteriores 5
      </button>

      <span className="text-gray-600 text-sm">
        {currentStart + 1} - {Math.min(currentEnd, total)} de {total} días
      </span>

      <button
        onClick={onNext}
        disabled={!hasNext}
        className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
          hasNext
            ? "bg-blue-950 text-white hover:bg-blue-900 active:scale-95"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        Siguientes 5
      </button>
    </div>
  );
}
