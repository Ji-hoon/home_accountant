import AssetTypeModel from "./asset_types.model.js";
import { ParsedQs } from "qs";

const assetTypeService = {
  async addAssetType({ name, groupId }: { name: string; groupId: string }) {
    return await AssetTypeModel.create({ name, groupId });
  },
  async updateAssetType({
    assetTypeId,
    name,
    groupId,
  }: {
    assetTypeId: string;
    name: string;
    groupId: string;
  }) {
    const assetTypeInfo = {
      name,
      groupId,
    };

    return await AssetTypeModel.findOneAndUpdate(
      {
        _id: assetTypeId,
      },
      assetTypeInfo,
      {
        new: true,
      },
    );
  },
  async getGroupAssetType({
    groupId,
  }: {
    groupId: string | string[] | ParsedQs | ParsedQs[];
  }) {
    return await AssetTypeModel.find({
      groupId: groupId as string,
    });
  },
};

export default assetTypeService;
