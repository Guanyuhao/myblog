interface Window {
  loadScript: (url: string) => Promise<void>;
  downloadResume: () => Promise<void>;
  printJS?: any;
}

// 如果需要printJS类型
declare var printJS: any; 