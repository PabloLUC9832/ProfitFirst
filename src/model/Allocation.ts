import { Model } from '@nozbe/watermelondb'
import {children, date, field, nochange, readonly, text, writer} from "@nozbe/watermelondb/decorators";
import {allocationsCollection} from "../db";

export default class Allocation extends Model {
  static table = 'allocations';

  static associations = {
    account_allocations: { type: 'has_many', foreignKey: 'allocation_id' },
  };

  @field('income') income?: number;
  @readonly @date('created_at') createdAt?: Date;
  @readonly @date('updated_at') updatedAt?: Date;

/*  @writer static async create(income: number) {
    return await allocationsCollection.create((newAllocation) => {
      newAllocation.income = income;
    });
  }*/
  @nochange @field('user_id') userId?: string;
  @children('account_allocations') accountAllocations; //?: Allocation[];




}