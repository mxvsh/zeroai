import MainLayout from '#/lib/components/layout';
import { ToolID, toolsMap } from '#/tools';

import React from 'react';

async function Page({
  params: { id: toolId },
}: {
  params: {
    id: ToolID;
  };
}) {
  if (toolId in toolsMap) {
    const component = toolsMap[toolId].page;
    if (component) {
      const Page = await component().then((mod) => mod.default);
      return <Page />;
    }

    return (
      <MainLayout>
        <div>
          <div>Tool is not available</div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div>Tool not found</div>
    </MainLayout>
  );
}

export default Page;
