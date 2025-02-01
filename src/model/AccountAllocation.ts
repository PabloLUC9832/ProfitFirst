import {date, field, immutableRelation, readonly} from "@nozbe/watermelondb/decorators";
import {Model} from "@nozbe/watermelondb";

export default class AccountAllocation extends Model{
  static table = 'account_allocations';

  static associations = {
    allocations: { type: 'belongs_to', foreignKey: 'allocation_id' },
    accounts: { type: 'belongs_to', foreignKey: 'account_id' },
  };

  @readonly @date('created_at') createdAt?: Date;
  @field('cap') cap?: number;
  @field('amount') amount?: number;

  @immutableRelation('accounts','account_id') account?: string;
  @immutableRelation('allocations','allocation_id') allocation?: string;

};